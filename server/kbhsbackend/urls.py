from django.contrib import admin
from django.urls import path, include
from kbhs.views import * 
from kbhs import views 
from django.conf import settings
from django.conf.urls.static import static
from kbhs.views import redirect_to_nairobi
urlpatterns = [
    path('admin/', admin.site.urls),  # Admin panel
    path('contact/', ContactUsView.as_view(), name='contactus'),  # ContactUs endpoint (class-based)
    path('kbhs/', include('kbhs.urls')),  # Include URLs from the 'kbhs' app
    path('admissions/', views.create_admissions, name='create_admissions'),  # Correct reference to admissions view
    path('assignments/', create_assignment, name='create_assignments'),
    path('redirect-nairobi/', redirect_to_nairobi, name='redirect_to_nairobi'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)