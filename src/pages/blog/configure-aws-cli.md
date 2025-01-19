---
layout: ../../layouts/Blog.astro
title: "Configure AWS CLI"
pubDate: 2025-01-18
description: ""
author:
  name: "Omar Eloui"
  email: "contact@omareloui.com"
tags: ["aws", "cli"]
---

After installing the CLI you'll need to configure it.

To give the CLI permissions, you'll need to create an IAM user from AWS' dashboard.

After this, go that user and create **Access Key**.

Back to the console, run this to configure it

```bash
aws configure
```

It'll prompt for the access and secret keys.

That's it!
