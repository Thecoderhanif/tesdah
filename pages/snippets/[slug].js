import { MDXRemote } from 'next-mdx-remote';

import SnippetsLayout from '@/layouts/snippets';
import MDXComponents from '@/components/MDXComponents';
import { getFileBySlug, getFiles } from '@/lib/mdx';

export default function Snippets({ mdxSource, frontMatter }) {
  return (
    <SnippetsLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </SnippetsLayout>
  );
}

export async function getStaticPaths() {
  const snippets = await getFiles('snippets');
  return {
    paths: snippets.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const snippet = await getFileBySlug('snippets', params.slug);

  return { props: snippet };
}
