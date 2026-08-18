---
permalink: /
title: ""
description: "Senhao (Simon) Cheng (程森浩) — Ph.D. student at Harbin Institute of Technology, Shenzhen, working on multimodal reasoning, vision-language models, and reinforcement learning."
excerpt: "Senhao (Simon) Cheng (程森浩) — Ph.D. student at Harbin Institute of Technology, Shenzhen, working on multimodal reasoning, vision-language models, and reinforcement learning."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a first-year Ph.D. student at the **Harbin Institute of Technology, Shenzhen**, advised by **Prof. Fangyuan Zhang**. I received my master's degree in Electrical and Computer Engineering from the **University of Michigan, Ann Arbor**, and my B.Eng. in Automation from **Zhejiang University**.

My research interests include **multimodal learning**, **vision-language understanding**, **reasoning and generation**, and **reinforcement learning for foundation models**. My recent work focuses on latent visual reasoning in vision-language models and sub-dimensional cross-modal retrieval.

I enjoy adventure sports. I hold a **USPA A License** and am a **CASI Level 2 snowboard instructor**, a **PADI Advanced Freediver**, and an **IKO-certified kitesurfer**. I also spend plenty of time with Bajie (八戒), **Australian Shepherd**, and Golden (狗蛋儿), **Maine Coon**.


# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL ARR 2026</div><img src='images/dlr.png' alt="DLR" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Decompose, Look, and Reason: Reinforced Latent Reasoning for VLMs](publications.html#dlr)

Mengdan Zhu\*, **Senhao Cheng**\*, Liang Zhao (\*Equal Contribution)

**Under Review at ACL ARR 2026**

- Premise-conditioned latent reasoning with dynamic multi-step visual grounding
- Spherical Gaussian Latent Policy for RL exploration on hyperspherical manifold
- Three-stage pipeline: contrastive pretraining → SFT → reinforcement finetuning
- V\* Bench **83.8%**, MathVista **67.5%**, MMMU-Pro **56.1%**, MMStar **65.2%**, surpassing GPT-4o
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL ARR 2026</div><img src='images/crossmodal_rag.png' alt="Cross-modal RAG" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Cross-modal RAG: Sub-dimensional Text-to-Image Retrieval-Augmented Generation](https://arxiv.org/abs/2505.21956)

Mengdan Zhu\*, **Senhao Cheng**\*, Guangji Bai, Yifei Zhang, Liang Zhao (\*Equal Contribution)

**Under Review at ACL ARR 2026** \| [arXiv](https://arxiv.org/abs/2505.21956) \| [Code](https://github.com/mengdanzhu/Cross-modal-RAG)

- Sub-dimensional dense retriever with lightweight adaptor (0.01× CLIP's GPU memory)
- Multi-objective Pareto-optimal image selection with theoretical guarantees
- MS-COCO R@1 **81.82%** (prev. best 59.10%), Flickr30K R@1 **97.50%**
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint 2024</div><img src='images/chemsafety.png' alt="ChemSafetyBench" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ChemSafetyBench: Benchmarking LLM Safety on Chemistry Domain](https://arxiv.org/abs/2411.16736)

Haochen Zhao\*, Xiangru Tang\*, ..., **Senhao Cheng**, ..., Mark Gerstein

[arXiv](https://arxiv.org/abs/2411.16736) \| [Code](https://github.com/HaochenZhao/SafeAgent4Chem)

- Comprehensive benchmark with **30,000+ samples** for evaluating LLM safety in chemistry
- Covers chemical properties, usage legality, and synthesis methods
- Incorporates handcrafted templates and advanced jailbreaking scenarios
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AIBDF 2023, ACM</div><img src='images/breast_cancer.png' alt="Breast Cancer Detection" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Breast Cancer Detection Model Based on Modified ConvNeXt v2](https://doi.org/10.1145/3660395.3660493)

**Senhao Cheng**, Esther Sun, Wangzi Qian, Yang Han

**Published** \| [DOI](https://doi.org/10.1145/3660395.3660493)

- Modified ConvNeXt v2 with Generalized-Mean Pooling and AdaBelief optimizer
- pF1 improvements of **0.031–0.043** over ResNet50, GoogLeNet, and EfficientNet-B2
</div>
</div>

# 📖 Education

- *2024 - 2026*, **M.S. in Electrical and Computer Engineering**, University of Michigan, Ann Arbor
  - Focus: Multimodal Reasoning, Vision-Language Models, RL for VLMs
- *2020 - 2024*, **B.Eng. in Automation**, Zhejiang University, Hangzhou, China

# 💼 Internships

- *2023.09 - 2024.04*, **AI & Data Analysis Intern**, MindRank Ltd., Hangzhou, China
  - Knowledge Graph construction, Biomedical Data analysis, Drug Discovery pipeline, Predictive Modeling

<div style="width:300px; margin:2em auto 0;">
<script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=M0hZnymEZ1MpTZi6F8Wfm3ZJX6qPdo3fHOaZ2wQAZbE&cl=ffffff&w=a"></script>
</div>
