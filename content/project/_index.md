---
title: Projects
type: landing
# (선택) 요약: summary: My Projects

sections:
  - block: collection
    id: projects
    content:
      title: Projects
      subtitle: ''
      # 폴더 'project' 아래의 카드들을 자동 수집
      filters:
        folders: ["project"]     # content/project/* 를 가리킴
        featured_only: false
        exclude_past: false
        exclude_future: false
    design:
      view: card                 # card | masonry | showcase 등
      columns: 2
---
