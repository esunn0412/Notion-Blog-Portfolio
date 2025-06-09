'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function GiscusComments() {
  const { theme } = useTheme();
  return (
    <Giscus
      repo="esunn0412/notion-blog-giscus"
      repoId="R_kgDOO4bODA"
      category="Announcements"
      categoryId="DIC_kwDOO4bODM4CrOBg"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
    />
  );
}
