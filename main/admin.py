from django.contrib import admin
from .models import Sobre, Tecnologias, Projetos


@admin.register(Sobre)
class SobreAdmin(admin.ModelAdmin):
    list_display = ('descricao', 'criado')


@admin.register(Tecnologias)
class TecnologiasAdmin(admin.ModelAdmin):
    list_display = ('nome', 'descricao', 'nivel', 'imagem', 'link', 'criado', 'modificado')


@admin.register(Projetos)
class ProjetosAdmin(admin.ModelAdmin):
    list_display = ('nome', 'foto', 'descricao', 'link', 'criado', 'modificado')

