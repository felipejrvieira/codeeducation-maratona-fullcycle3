FROM  python:3

RUN useradd -ms /bin/bash django

USER django

ENV PYTHONUNBUFFERED 1

WORKDIR /home/django/app

ENV PATH $PATH:/home/django/.local/bin

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["python","manage.py","runserver","0.0.0.0:8000"]