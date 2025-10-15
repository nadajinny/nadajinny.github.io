---
title: Experience
summary: My Experience
type: landing

cascade:
  - target:
      path: '{../authors/*}'
    type: docs
    params:
      show_breadcrumb: true


# Page sections
sections:
  - block: resume-experience
    id: work
    content:
      title: Experience
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      is_education_first: false
  - block: resume-skills
    id: skills
    content:
      title: Skills & Hobbies
      username: admin
    design:
      show_skill_percentage: false
  - block: resume-awards
    id: awards
    content:
      title: Awards
      username: admin
  - block: resume-languages
    id: languages
    content:
      title: Languages
      username: admin
---