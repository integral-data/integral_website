# from django.shortcuts import render
# Create your views here.
# views.py

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import os

@csrf_exempt
def send_email(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        print(f"DATA: {data}")
        print(f"Name: {name}")
        print(f"Email: {email}")
        print(f"Message: {message}")        
        
        message_text = f"""We've got a new business lead from the integral website! Find the details below:\n
Name: {name}
Email: {email}\n
Message: {message}

Thanks,
Integral Bot
        """


        message = Mail(
            from_email="integralnewbusiness@gmail.com",
            to_emails=['amlvt225@icloud.com'],
            subject=f'New Business Opp - Message from {name} via Contact Form',
            plain_text_content=message_text
        )
        try:
            sg = SendGridAPIClient("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")
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
            return JsonResponse({'status':'success'}, status=200)
        except Exception as e:
            print(e)
            return JsonResponse({'status':'error', 'error': str(e)}, status=500)
    else:
        return JsonResponse({'status':'error', 'error':'Only POST method is allowed'}, status=400)





# @csrf_exempt
# def send_email(request):
#     if request.method == 'POST':

        
        
#         data = json.loads(request.body)
#         name = data.get('name')
#         email = data.get('email')
#         message = data.get('message')
#         print(f"DATA: {data}")
#         print(f"Name: {name}")
#         print(f"Email: {email}")
#         print(f"Message: {message}")

#         # import smtplib

#         # sender = 'integralinquiries@integral.io'
#         # receivers = ['integraldatainquiries@yahoo.com']

#         # # From: Integral New Business <integraldatainquiries@yahoo.com>
#         # # To: Integral New Business <integraldatainquiries@yahoo.com>
#         # # Subject: New Business Inquiry From Website
#         # to_send = f"""
#         # Hi Jeff,

#         # I hope you are doing well! Hello. You have receive a new business request from the website.

#         # Find the details below:
#         # Name: {name}
#         # Email: {email}
#         # Message: {message}
#         # """
#         # try:
#         #     smtpObj = smtplib.SMTP('localhost')
#         #     smtpObj.sendmail(sender, receivers, to_send)         
#         #     print("Successfully sent email")
#         # except SMTPException:
#         #     print("Error: unable to send email")




#         try:


#             send_mail(
#                 f'Message from {name} via Contact Form',
#                 message,
#                 email,
#                 ['integraldatainquiries@yahoo.com'], # Replace with your email
#             )
#             return JsonResponse({'status':'success'}, status=200)
#         except Exception as e:
#             print(e)
#             return JsonResponse({'status':'error', 'error': str(e)}, status=500)
        
#     else:
#         return JsonResponse({'status':'error', 'error':'Only POST method is allowed'}, status=400)
