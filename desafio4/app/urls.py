from django.urls import path

from app.views import aulas_list

urlpatterns = [
    path('maratona/',aulas_list)
]