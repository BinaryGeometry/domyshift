from django.shortcuts import render

# Create your views here.
from rest_framework import permissions, viewsets
from django.contrib.auth.models import Group, User
from .models import Galaxy
from .serializers import GalaxySerializer, GroupSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """ 
    queryset = User.objects.all().order_by('username')
    
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class GalaxyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows galaxys to be viewed or edited.
    """
    queryset = Galaxy.objects.all().order_by('title')
    serializer_class = GalaxySerializer
    permission_classes = [permissions.IsAuthenticated]
