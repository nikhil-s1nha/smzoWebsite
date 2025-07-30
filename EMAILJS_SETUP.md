# EmailJS Setup for Contact Form

This setup uses EmailJS to send emails directly from the browser, making it work for any website visitor without server-side configuration.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (smilezonefamilydental@gmail.com)
5. Note down the **Service ID** (starts with "service_")

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
Contact Form: {{subject}}
```

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; }
        .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-box { background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .message-box { background-color: #f1f5f9; padding: 15px; border-radius: 8px; }
        .footer { background-color: #dbeafe; padding: 15px; border-radius: 8px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact Form Submission</h2>
    </div>
    
    <div class="content">
        <div class="info-box">
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Phone:</strong> {{phone}}</p>
            <p><strong>Subject:</strong> {{subject}}</p>
        </div>
        
        <div class="message-box">
            <h3>Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">{{message}}</p>
        </div>
        
        <div class="footer">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
                This message was sent from the Smile Zone Family Dental contact form.
            </p>
        </div>
    </div>
</body>
</html>
```

4. Note down the **Template ID** (starts with "template_")

### Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update the Code
Replace the placeholder values in `app/contact/page.tsx`:

```javascript
const result = await emailjs.send(
  'service_YOUR_SERVICE_ID',     // Replace with your Service ID
  'template_YOUR_TEMPLATE_ID',   // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'              // Replace with your Public Key
)
```

## ✅ Benefits of This Approach

- **Works for everyone**: No server configuration needed
- **Free tier**: 200 emails per month free
- **Professional emails**: HTML templates with branding
- **Reliable**: Handled by EmailJS infrastructure
- **Secure**: No credentials exposed in code
- **Easy setup**: 5-minute configuration

## 🔧 Alternative: Formspree

If you prefer, you can also use Formspree:

1. Go to [Formspree.io](https://formspree.io/)
2. Create account and form
3. Replace the form action with your Formspree endpoint
4. No JavaScript changes needed

## 📧 Email Features

- **Recipient**: smilezonefamilydental@gmail.com
- **Subject**: "Contact Form: [Selected Subject]"
- **Content**: Professional HTML email with all form data
- **Branding**: Smile Zone Family Dental styling

## 🎯 Next Steps

1. Follow the EmailJS setup above
2. Update the code with your IDs
3. Test the form
4. Deploy to production

The form will work perfectly for any website visitor once configured! 