from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse 
from api.models import Company, Vacancy
# Create your views here.
def companies_list(request):
    return JsonResponse(
        list(Company.objects.values()), safe=False,json_dumps_params={'indent' : 2}
    )
def company_by_id(request,id):
    for i in list(Company.objects.values()):
        if str(i['id']) == str(id):
            return JsonResponse(i,safe=False,json_dumps_params={'indent' : 2})
    return HttpResponse('do not have such id')
def company_vacancy(request,id):
    temp = []
    for i in list(Vacancy.objects.values()):
        if str(i['company_id']) == str(id):
            temp.append(i)
    if len(temp) != 0:
        return JsonResponse(temp, safe=False, json_dumps_params={'indent' : 2})
    return HttpResponse('do not have such id')
def vacancies_list(request):
    return JsonResponse(
        list(Vacancy.objects.values()), safe=False,json_dumps_params={'indent' : 2}
    )
def vacancy_by_id(request,id):
    for i in list(Vacancy.objects.values()):
        if str(i['id']) == str(id):
            return JsonResponse(i,safe=False,json_dumps_params={'indent' : 2})
    return HttpResponse('do not have such id')
def top_ten(request):
    return JsonResponse(
        list(Vacancy.objects.order_by('-salary')[:10].values()), safe=False, json_dumps_params={'indent' : 2}
    )