from django.shortcuts import render, redirect
from todoApp.models import Tasks

# Create your views here.

def todo_view(request):
    try:
        tasks = Tasks.objects.all()
        not_completed_tasks = tasks.filter(status="not completed")
        completed_tasks = tasks.filter(status="completed")
        msg = "Complete these tasks" if not_completed_tasks else "You have not added any tasks yet"
        
    except:
        msg = "You have not added any tasks yet"
        not_completed_tasks = []
        completed_tasks = []

    if request.method == 'POST':
        tname = request.POST['task']
        add_task = Tasks(tname=tname)
        add_task.save()
        return redirect('/')
    my_dict = {'msg': msg, 'not_completed_tasks': not_completed_tasks, 'completed_tasks': completed_tasks}
    return render(request,'todoapp/index.html', my_dict)

def delete_view(request, id):
    dtask = Tasks.objects.get(id=id)
    dtask.delete()
    return redirect('/')

def update_view(request, id):
    dtask = Tasks.objects.get(id=id)
    dtask.status = 'completed'
    dtask.save()
    return redirect('/')


def update2_view(request, id):
    dtask = Tasks.objects.get(id=id)
    if request.method == 'POST':
        utask = request.POST.get('utask', '')
        dtask.tname = utask
        dtask.save()
        return redirect('/')
