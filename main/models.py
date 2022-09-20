from django.db import models
import uuid


def get_file_path(_instance, filename):
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'
    return filename


class Base(models.Model):
    criado = models.DateField('Data de criação:', auto_now_add=True)
    modificado = models.DateField('data de modificação:', auto_now=True)

    class Meta:
        abstract = True


class Sobre(Base):
    nome = 'Edite o texto da area sobre. (Maximo 500 caractéres)'
    descricao = models.TextField('Texto:', max_length=500)

    def __str__(self):
        return self.nome


class Tecnologias(Base):
    NIVEL_CHOICES = (
        ('Iniciante', 'Até 1 ano'),
        ('Intermediário', 'De 1 á 2 anos'),
        ('Avançado', 'Mais de 2 anos'),
    )
    nome = models.CharField('técnologia:', max_length=15)
    descricao = models.TextField('Descrição:', max_length=400)
    nivel = models.CharField('Tempo de estudo:', max_length=15, choices=NIVEL_CHOICES)
    imagem = models.ImageField('Imagem da técnologia:', upload_to='Tecnologias')
    link = models.CharField('Link:', max_length=200)

    class Meta:
        verbose_name = 'Técnologia'
        verbose_name_plural = 'Técnologias'

    def __str__(self):
        return self.nome


class Projetos(Base):
    nome = models.CharField('Nome do projeto:', max_length=80)
    foto = models.ImageField('Imagem do projeto:', upload_to='Tecnologias')
    descricao = models.TextField('Descrição:', max_length=700)
    link = models.CharField('Link:', max_length=200)

    class Meta:
        verbose_name = 'Projeto'
        verbose_name_plural = 'Projétos'

    def __str__(self):
        return self.nome
