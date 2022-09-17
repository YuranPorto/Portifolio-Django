from django.views.generic import TemplateView
from .models import Sobre, Tecnologias, Projetos


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['sobre'] = Sobre.objects.all()
        context['tecnologias'] = Tecnologias.objects.all()
        context['projetos'] = Projetos.objects.all()
        return context
