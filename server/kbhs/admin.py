from django.contrib import admin
from . models import *

# Register your models here.
@admin.register(Admissions)
class AdmissionsAdmin(admin.ModelAdmin):
    list_display=('first_name', 'last_name', 'form', 'admission_number','hostel')
    list_filter=('form',)
    search_fields=('name','admission_number')
    
@admin.register(Assignment)
class AssignmentAdmin(admin.ModelAdmin):
    list_display = ('file',)  # Only show the 'file' field
    search_fields = ('file',)  # Enable search by file name (if needed)
    list_filter = ()
    
@admin.register(ContactUs)
class ContactUsAdmin(admin.ModelAdmin):
    list_display=('name','email','message')
    readonly_fields=('name','email','message')
    
    def has_add_permission(self, request):
        return False
    def has_change_permission(self, request, obj=None):
        return False
    def has_delete_permission(self, request, obj=None):
        return False
