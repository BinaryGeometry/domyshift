from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Galaxy


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class GalaxySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Galaxy
        fields = ['id', 'title', 'desc', 'year']