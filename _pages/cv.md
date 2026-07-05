---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

> 📌 **待补充 / To be completed** — 请按下方格式补充教育背景、工作经历等。

Education
======
* [学历 1 — 学校 — 时间]
* [学历 2 — 学校 — 时间]

Work experience
======
* [经历 1 — 单位 — 时间]
  * [职责描述]

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Skills
======
* [技能 1]
* [技能 2]

Service and leadership
======
* [服务 / 学术组织 / 审稿等]