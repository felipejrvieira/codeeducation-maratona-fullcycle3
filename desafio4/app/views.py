from django.shortcuts import render

# Create your views here.
from app.models import Aulas

def aulas_list(request):
    aulas = Aulas.objects.all()
    return render(
        request,
        'aulas_list.html',
        {
            'aulas':aulas
        }
    )