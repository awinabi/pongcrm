from django.contrib.auth.mixins import LoginRequiredMixin
from django.template.loader import render_to_string
from django.views.generic import TemplateView
from django.views import View
from django.shortcuts import render


class DashboardView(LoginRequiredMixin, TemplateView):
    template_name = "crm/dashboard.html"


class TestView(View):
    def get(self, request, *args, **kwargs):
        template_name = "email/test_render.html"
        object = render_to_string("email/test_email.html", {"name": "Awin"})
        return render(request, template_name, {"object": object})
