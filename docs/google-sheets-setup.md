# Google Sheet में "समस्या फॉर्म" का डेटा सेव करना — सेटअप गाइड

वेबसाइट पर मौजूद "समस्या दर्ज करें" फॉर्म (`#samasya`) से भरी गई हर एंट्री
सीधे एक Google Sheet में एक नई row के रूप में सेव होती है। इसके लिए Google
Sheet के साथ एक **Apps Script Web App** जोड़ना होता है — इसमें किसी Google
Cloud प्रोजेक्ट या अलग से credentials बनाने की ज़रूरत नहीं है।

हर row में ये कॉलम होंगे:

| timestamp | name | village | mobile | problem |
| --- | --- | --- | --- | --- |

## चरण 1 — नई Google Sheet बनाएं

1. [sheets.google.com](https://sheets.google.com) पर जाकर एक नई, खाली Sheet
   बनाएं (जैसे "बाणियावास — समस्या फॉर्म एंट्री")।
2. पहली row में हेडर लिख दें (optional, लेकिन सुझाया गया है):
   `timestamp`, `name`, `village`, `mobile`, `problem`

## चरण 2 — Apps Script जोड़ें

1. Sheet में ऊपर मेनू से **Extensions → Apps Script** खोलें।
2. वहाँ पहले से मौजूद कोड हटा दें और नीचे दिया गया पूरा कोड पेस्ट करें:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       data.timestamp || new Date().toISOString(),
       data.name    || "",
       data.village || "",
       data.mobile  || "",
       data.problem || "",
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ status: "success" }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. ऊपर दिख रहे प्रोजेक्ट को कोई भी नाम दे दें (जैसे "Samasya Form Webhook")
   और **Save** (डिस्क आइकन) पर क्लिक करें।

## चरण 3 — Web App के रूप में Deploy करें

1. ऊपर दाईं ओर **Deploy → New deployment** पर क्लिक करें।
2. "Select type" में gear आइकन से **Web app** चुनें।
3. Settings इस तरह रखें:
   - **Execute as:** Me (आपकी अपनी Google ID)
   - **Who has access:** Anyone
4. **Deploy** पर क्लिक करें। Google आपसे permission की अनुमति माँगेगा —
   अपने Google अकाउंट से Allow कर दें।
5. Deploy होने के बाद एक **Web app URL** मिलेगा, जो कुछ ऐसा दिखेगा:

   ```
   https://script.google.com/macros/s/XXXXXXXXXXXXXXXX/exec
   ```

   इस पूरे URL को कॉपी कर लें — यही अगले चरण में इस्तेमाल होगा।

> **ध्यान दें:** अगर आगे कभी Apps Script के कोड में बदलाव करें, तो **Deploy →
> Manage deployments → Edit (पेंसिल आइकन) → Version: New version → Deploy**
> ज़रूर करें, तभी नया कोड लाइव होगा।

## चरण 4 — वेबसाइट में URL सेट करें

इस प्रोजेक्ट के रूट में `.env.example` फ़ाइल जैसी एक `.env.local` फ़ाइल बनाएं
(यह फ़ाइल `.gitignore` में है, इसलिए git में commit नहीं होगी):

```
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXXXXXXXXXX/exec
```

फिर dev server दोबारा शुरू करें (`npm run dev`) ताकि नया env var लोड हो
जाए।

### लाइव वेबसाइट (जैसे Vercel) पर

1. अपने होस्टिंग प्रोजेक्ट की **Settings → Environment Variables** में जाएं।
2. `GOOGLE_SHEET_WEBHOOK_URL` नाम का variable जोड़ें और value में वही Web
   app URL पेस्ट करें।
3. साइट को दोबारा **redeploy** करें, ताकि नया env var लागू हो जाए।

## चरण 5 — टेस्ट करें

1. वेबसाइट पर "समस्या दर्ज करें" फॉर्म खोलें, सभी required fields भरें,
   सहमति (consent) checkbox चुनें और submit करें।
2. फॉर्म पर confirmation message दिखना चाहिए।
3. अपनी Google Sheet खोलकर देखें — एक नई row जुड़ी होनी चाहिए।

अगर submit करने पर कोई error message दिखे, तो पहले जांचें कि:

- `GOOGLE_SHEET_WEBHOOK_URL` सही तरीके से सेट है और dev server/deployment
  दोबारा शुरू की गई है।
- Apps Script deployment में "Who has access" **Anyone** पर सेट है।
- Apps Script के किसी भी नए बदलाव के बाद **New version** deploy की गई है।
