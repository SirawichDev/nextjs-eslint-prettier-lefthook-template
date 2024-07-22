import { getLocale } from 'next-intl/server';

export default async function Home() {
  const locale = await getLocale();
  console.log('🚀 ~ Home ~ locale:', locale);
  return <h1>Layout Content</h1>;
}
