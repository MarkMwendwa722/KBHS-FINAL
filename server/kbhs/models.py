from django.db import models
from django.core.validators import EmailValidator


# Create your models here.

from django.db import models

class Assignment(models.Model):
    file = models.FileField(upload_to='assignments/', blank=True, null=True)
    
    def __str__(self):
        return self.name  # Display name in the admin interface or when accessed
    
    class Meta:
        verbose_name = 'Assignment'
        verbose_name_plural = 'Assignments'
    
class Admissions(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, null=True)
    form = models.CharField(max_length=100)
    admission_number = models.CharField(max_length=100)
    hostel = models.CharField(max_length=100, default='Unknown')
    
    
    
    def __str__(self):
        return f"{self.name} - {self.form}"
class ContactUs(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    message=models.TextField()
    
    def __str__(self):
        return f"Message from {self.name} - {self.message}"