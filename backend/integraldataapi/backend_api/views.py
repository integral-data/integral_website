from django.shortcuts import render

# Create your views here.
# views.py
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def send_email(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        try:
            send_mail(
                f'Message from {name} via Contact Form',
                message,
                email,
                ['integraldatainquiries@yahoo.com'], # Replace with your email
            )
            return JsonResponse({'status':'success'}, status=200)
        except Exception as e:
            return JsonResponse({'status':'error', 'error': str(e)}, status=500)
    else:
        return JsonResponse({'status':'error', 'error':'Only POST method is allowed'}, status=400)
