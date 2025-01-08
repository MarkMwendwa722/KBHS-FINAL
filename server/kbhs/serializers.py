from rest_framework import serializers
from . models import *  

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ['file']    
        
class AdmissionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admissions
        fields = ['first_name', 'last_name', 'form', 'admission_number', 'hostel']
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
            'form': {'required': True},
            'admission_number': {'required': True},
            'hostel': {'required': False},  
        }

        
class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ['name', 'email', 'message']
    
    
    
    
