from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status  # Import status for HTTP response codes
from rest_framework.views import APIView  # For class-based views
from rest_framework.authentication import TokenAuthentication
from django.shortcuts import redirect

from .serializers import AssignmentSerializer, AdmissionsSerializer, ContactUsSerializer
from .models import Assignment, Admissions


# Contact Us View - class-based
class ContactUsView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = ContactUsSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Contact request received"}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# Assignment Views

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def create_assignment(request):
    """
    Create a new assignment.
    """
    serializer = AssignmentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Assignment submitted successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_assignment(request):
    """
    List all assignments.
    """
    assignments = Assignment.objects.all()
    serializer = AssignmentSerializer(assignments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['PUT'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def update_assignment(request):
    try:
        assignment = Assignment.objects.get(id=request.data['id'])  # Assuming 'id' is passed in the body
    except Assignment.DoesNotExist:
        return Response({"error": "Assignment not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = AssignmentSerializer(assignment, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_assignment(request, id):
    """
    Delete an assignment by ID.
    """
    try:
        assignment = Assignment.objects.get(id=id)
    except Assignment.DoesNotExist:
        return Response({"error": "Assignment not found"}, status=status.HTTP_404_NOT_FOUND)

    assignment.delete()
    return Response({"message": "Assignment deleted successfully"}, status=status.HTTP_200_OK)


# Admissions Views

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_admissions(request):
    """
    Create a new student admission.
    """
    serializer = AdmissionsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Student admitted successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_admissions(request):
    """
    List all student admissions.
    """
    admissions = Admissions.objects.all()
    serializer = AdmissionsSerializer(admissions, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_admissions(request, admission_number):
    """
    Update a student admission by admission number.
    """
    try:
        admissions = Admissions.objects.get(admission_number=admission_number)
    except Admissions.DoesNotExist:
        return Response({"error": "Admissions not found"}, status=status.HTTP_404_NOT_FOUND)

    # Pass data from the request to the serializer
    serializer = AdmissionsSerializer(admissions, data=request.data, partial=False)  # Use partial=False for complete updates

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



def redirect_to_nairobi(request):
    """
    Redirect to Nairobi's coordinates on Google Maps.
    """
    latitude = '-1.286389'
    longitude = '36.817223'

    maps_url = f"https://www.google.com/maps/search/?api=1&query={latitude},{longitude}"
    return redirect(maps_url)

