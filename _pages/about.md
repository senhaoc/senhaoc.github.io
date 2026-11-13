---
permalink: /
title: ""
description: "Senhao (Simon) Cheng (程森浩) is a Ph.D. student at Harbin Institute of Technology, Shenzhen, working on AI agents, agentic reasoning, and multimodal interaction."
excerpt: "Senhao (Simon) Cheng (程森浩) is a Ph.D. student at Harbin Institute of Technology, Shenzhen, working on AI agents, agentic reasoning, and multimodal interaction."
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

I am a first-year Ph.D. student at the **Harbin Institute of Technology, Shenzhen**, advised by **Prof. Fangyuan Zhang**. Before that, I earned an M.S. in Electrical and Computer Engineering from the **University of Michigan, Ann Arbor** and a B.Eng. in Automation from **Zhejiang University**.

My research focuses on **AI agents**, especially how language-model agents reason, plan, use tools, and learn from interaction. I am also interested in **agent memory**, **multimodal agents**, and **human-agent collaboration**, with an emphasis on building agents that remain reliable on long-horizon, real-world tasks.

Outside the lab, I enjoy skydiving, snowboarding, freediving, and kitesurfing. I hold a **USPA A License** and am a **CASI Level 2 snowboard instructor**, a **PADI Advanced Freediver**, and an **IKO-certified kitesurfer**. At home, I have an **Australian Shepherd** named Bajie (八戒) and a **Maine Coon** named Goudan'er (狗蛋儿).


# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2026 Main</div><img src='images/dlr.png' alt="DLR" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Decompose, Look, and Reason: Reinforced Latent Reasoning for VLMs](https://arxiv.org/abs/2604.07518)

Mengdan Zhu, **Senhao Cheng**, Liang Zhao

**Accepted to EMNLP 2026 (Main Conference)** \| [arXiv](https://arxiv.org/abs/2604.07518)

- Premise-conditioned latent reasoning with dynamic multi-step visual grounding
- Spherical Gaussian Latent Policy for RL exploration on hyperspherical manifold
- Three-stage pipeline: contrastive pretraining → SFT → reinforcement finetuning
- V\* Bench **83.8%**, MathVista **67.5%**, MMMU-Pro **56.1%**, MMStar **65.2%**, surpassing GPT-4o
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EACL 2027 Findings</div><img src='images/crossmodal_rag.png' alt="Cross-modal RAG" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Cross-modal RAG: Sub-dimensional Text-to-Image Retrieval-Augmented Generation](https://arxiv.org/abs/2505.21956)

Mengdan Zhu, **Senhao Cheng**, Guangji Bai, Yifei Zhang, Liang Zhao

**Accepted to Findings of EACL 2027** \| [arXiv](https://arxiv.org/abs/2505.21956) \| [Code](https://github.com/mengdanzhu/Cross-modal-RAG)

- Sub-dimensional dense retriever with lightweight adaptor (0.01× CLIP's GPU memory)
- Multi-objective Pareto-optimal image selection with theoretical guarantees
- MS-COCO R@1 **81.82%** (prev. best 59.10%), Flickr30K R@1 **97.50%**
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint 2024</div><img src='images/chemsafety.png' alt="ChemSafetyBench" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ChemSafetyBench: Benchmarking LLM Safety on Chemistry Domain](https://arxiv.org/abs/2411.16736)

Haochen Zhao, Xiangru Tang, ..., **Senhao Cheng**, ..., Mark Gerstein

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

- *2026 - Present*, **Ph.D. Student**, Harbin Institute of Technology, Shenzhen
  - Advisor: Prof. Fangyuan Zhang
- *2024 - 2026*, **M.S. in Electrical and Computer Engineering**, University of Michigan, Ann Arbor
  - Focus: Multimodal Reasoning, Vision-Language Models, RL for VLMs
- *2020 - 2024*, **B.Eng. in Automation**, Zhejiang University, Hangzhou, China

# 💼 Internships

- *2023.09 - 2024.04*, **AI & Data Analysis Intern**, MindRank Ltd., Hangzhou, China
  - Knowledge Graph construction, Biomedical Data analysis, Drug Discovery pipeline, Predictive Modeling

<style>
.visitor-map {
  margin: 2.5em auto 0;
  text-align: center;
}
.visitor-map h2 {
  margin-bottom: 0.25em;
}
.visitor-map__summary {
  margin: 0.4em 0 0;
  color: #666;
  font-size: 0.9em;
}
</style>

<div class="visitor-map" aria-labelledby="visitor-map-title">
  <h2 id="visitor-map-title">Global Visitors</h2>
  <div id="visitor-globe" aria-label="All-time visitor locations"></div>
  <p id="visitor-map-summary" class="visitor-map__summary">Loading all-time traffic…</p>
  <script>
    window.__receiveVisitorGlobe = data => {
      window.__visitorGlobeData = data;
    };
  </script>
  <script src="https://umami-senhaoc.vercel.app/api/visitor-globe?callback=__receiveVisitorGlobe&amp;v=2"></script>
  <script
    src="https://unpkg.com/umami-maps@0.1.0/dist/embed.global.js"
    data-target="#visitor-globe-disabled"
  ></script>
  <script>
  (() => {
    const summary = document.getElementById('visitor-map-summary');
    const data = window.__visitorGlobeData;

    if (!data || !window.UmamiMaps) {
      summary.textContent = 'All-time visitor statistics are temporarily unavailable.';
      return;
    }

    window.UmamiMaps.renderUmamiGlobe(document.getElementById('visitor-globe'), {
      data,
      size: 280,
      caption: false,
    });

    const pageviews = Number(data.totalPageviews || 0).toLocaleString();
    const visitors = Number(data.totalVisitors || 0).toLocaleString();
    const countries = Number(data.totalCountries || 0).toLocaleString();
    summary.textContent = `${pageviews} page views · ${visitors} visitors from ${countries} countries · all time`;
  })();
  </script>
</div>
