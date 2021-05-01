from django.db import models


class HeadingManager(models.Manager):
    def with_counts(self):
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("""
            SELECT id, name, description, section_id, count(*) from api_heading
            GROUP BY section_id""")
        result_list = []
        for row in cursor.fetchall():
            p = self.model(id=row[0], description=row[1], section_id=row[2])
            p.count = row[3]
            result_list.append(p)
        return result_list


class Section(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.CharField(max_length=100)

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)


class Heading(models.Model):
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)


class Subheading(models.Model):
    heading = models.ForeignKey(Heading, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    recipe = models.TextField()

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)
