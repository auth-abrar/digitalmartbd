import { Product } from '@/types';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';

// Levenshtein distance for typo tolerance
function levenshtein(a: string, b: string): number {
  const an = a.length;
  const bn = b.length;
  if (an === 0) return bn;
  if (bn === 0) return an;

  const matrix: number[][] = [];
  for (let i = 0; i <= bn; ++i) {
    matrix[i] = [i];
  }
  for (let i = 0; i <= an; ++i) {
    matrix[0][i] = i;
  }

  for (let i = 1; i <= bn; ++i) {
    for (let j = 1; j <= an; ++j) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[bn][an];
}

// Intent dictionary mapping common misspellings, colloquial terms, and use-cases to product slugs
const INTENT_MAPPINGS: Record<string, string[]> = {
  // ChatGPT & OpenAI intents
  chatgpt: ['chatgpt-plus'],
  chat: ['chatgpt-plus'],
  gpt: ['chatgpt-plus'],
  gpt4: ['chatgpt-plus'],
  gpt4o: ['chatgpt-plus'],
  openai: ['chatgpt-plus'],
  o1: ['chatgpt-plus'],
  cgpt: ['chatgpt-plus'],
  chet: ['chatgpt-plus'],
  chetgpt: ['chatgpt-plus'],
  'চেটজিপিটি': ['chatgpt-plus'],
  'চ্যাটজিপিটি': ['chatgpt-plus'],
  'জিটিপি': ['chatgpt-plus'],
  
  // Claude intents
  claude: ['claude-pro'],
  claud: ['claude-pro'],
  cloude: ['claude-pro'],
  sonnet: ['claude-pro'],
  anthropic: ['claude-pro'],
  opus: ['claude-pro'],
  'ক্লড': ['claude-pro'],
  'ক্লদ': ['claude-pro'],

  // Gemini intents
  gemini: ['gemini-advanced'],
  gemeny: ['gemini-advanced'],
  gemny: ['gemini-advanced'],
  geminiadvanced: ['gemini-advanced'],
  googleai: ['gemini-advanced'],
  bard: ['gemini-advanced'],
  'জেমিনি': ['gemini-advanced'],
  'জেমিনী': ['gemini-advanced'],

  // Perplexity intents
  perplexity: ['perplexity-pro'],
  perplexcity: ['perplexity-pro'],
  perplexty: ['perplexity-pro'],
  parplexity: ['perplexity-pro'],
  research: ['perplexity-pro', 'chatgpt-plus', 'claude-pro'],
  sonar: ['perplexity-pro'],
  'পারপ্লেক্সিটি': ['perplexity-pro'],
  'পারপ্লেক্সিটী': ['perplexity-pro'],

  // Canva & Design intents
  canva: ['canva-pro'],
  canba: ['canva-pro'],
  design: ['canva-pro'],
  poster: ['canva-pro'],
  photo: ['canva-pro'],
  graphics: ['canva-pro'],
  logo: ['canva-pro'],
  'ক্যানভা': ['canva-pro'],
  'গ্রাফিক্স': ['canva-pro'],

  // Facebook intents
  facebook: ['facebook-page-likes', 'facebook-profile-followers'],
  fb: ['facebook-page-likes', 'facebook-profile-followers'],
  fblike: ['facebook-page-likes'],
  fbpage: ['facebook-page-likes'],
  fbfollower: ['facebook-profile-followers'],
  'ফেসবুক': ['facebook-page-likes', 'facebook-profile-followers'],
  'লাইক': ['facebook-page-likes', 'instagram-followers-likes'],
  'ফলোয়ার': ['facebook-profile-followers', 'instagram-followers-likes'],

  // Instagram intents
  instagram: ['instagram-followers-likes'],
  insta: ['instagram-followers-likes'],
  ig: ['instagram-followers-likes'],
  igfollower: ['instagram-followers-likes'],
  reel: ['instagram-followers-likes'],
  'ইনস্টাগ্রাম': ['instagram-followers-likes'],
  'ইনস্টা': ['instagram-followers-likes'],

  // YouTube intents
  youtube: ['youtube-subscribers-watchtime'],
  yt: ['youtube-subscribers-watchtime'],
  watchtime: ['youtube-subscribers-watchtime'],
  subscribers: ['youtube-subscribers-watchtime'],
  subs: ['youtube-subscribers-watchtime'],
  monetize: ['youtube-subscribers-watchtime', 'facebook-page-likes'],
  monetization: ['youtube-subscribers-watchtime', 'facebook-page-likes'],
  'ইউটিউব': ['youtube-subscribers-watchtime'],
  'সাবস্ক্রাইবার': ['youtube-subscribers-watchtime'],
  'ওয়াচটাইম': ['youtube-subscribers-watchtime'],

  // General use cases
  coding: ['chatgpt-plus', 'claude-pro'],
  programming: ['chatgpt-plus', 'claude-pro'],
  freelancing: ['chatgpt-plus', 'claude-pro', 'canva-pro'],
  content: ['chatgpt-plus', 'claude-pro', 'canva-pro'],
  writing: ['chatgpt-plus', 'claude-pro'],
  marketing: ['facebook-page-likes', 'instagram-followers-likes', 'canva-pro'],
  social: ['facebook-page-likes', 'facebook-profile-followers', 'instagram-followers-likes', 'youtube-subscribers-watchtime'],
};

export interface SearchMatch {
  product: Product;
  score: number;
  matchType: 'exact' | 'prefix' | 'fuzzy' | 'intent' | 'tag';
}

export interface SearchResult {
  query: string;
  normalizedQuery: string;
  products: Product[];
  didYouMean?: string;
  suggestedCategory?: string;
}

export function smartSearch(rawQuery: string): SearchResult {
  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    return {
      query: rawQuery,
      normalizedQuery: '',
      products: [],
    };
  }

  const tokens = query.split(/\s+/).filter(Boolean);
  const scoredMap = new Map<string, { product: Product; score: number; matchType: any }>();

  // 1. Direct Intent & Synonym Dictionary Lookup
  for (const token of tokens) {
    if (INTENT_MAPPINGS[token]) {
      const targetSlugs = INTENT_MAPPINGS[token];
      for (const slug of targetSlugs) {
        const prod = PRODUCTS.find((p) => p.slug === slug);
        if (prod) {
          const existing = scoredMap.get(prod.id)?.score || 0;
          scoredMap.set(prod.id, {
            product: prod,
            score: existing + 85,
            matchType: 'intent',
          });
        }
      }
    }
  }

  // 2. Full product index iteration (Exact, Prefix, Fuzzy, Tags, Descriptions)
  for (const product of PRODUCTS) {
    const nameEn = product.name_en.toLowerCase();
    const nameBn = product.name_bn.toLowerCase();
    const platform = product.platform.toLowerCase();
    const tags = product.tags.map((t) => t.toLowerCase());
    const descEn = product.short_description_en.toLowerCase();
    const descBn = product.short_description_bn.toLowerCase();

    let productScore = scoredMap.get(product.id)?.score || 0;
    let matchType = scoredMap.get(product.id)?.matchType || 'tag';

    // Exact string containment
    if (nameEn.includes(query) || nameBn.includes(query) || platform.includes(query)) {
      productScore += 100;
      matchType = 'exact';
    } else if (nameEn.startsWith(query) || platform.startsWith(query)) {
      productScore += 90;
      matchType = 'prefix';
    } else if (tags.some((t) => t.includes(query))) {
      productScore += 75;
      matchType = 'tag';
    } else if (descEn.includes(query) || descBn.includes(query)) {
      productScore += 45;
      matchType = 'tag';
    }

    // Token-level inspection & Levenshtein distance for typos
    for (const token of tokens) {
      if (token.length < 3) continue;

      // Platform check with fuzzy tolerance
      const platformDist = levenshtein(token, platform);
      if (platformDist <= 1 || (token.length >= 6 && platformDist <= 2)) {
        productScore += 70;
        if (matchType !== 'exact') matchType = 'fuzzy';
      }

      // Words inside product name
      const nameWords = nameEn.split(/\s+/);
      for (const nw of nameWords) {
        if (nw.length >= 3) {
          const dist = levenshtein(token, nw);
          if (dist <= 1 || (token.length >= 6 && dist <= 2)) {
            productScore += 60;
            if (matchType !== 'exact') matchType = 'fuzzy';
          }
        }
      }
    }

    if (productScore > 0) {
      scoredMap.set(product.id, { product, score: productScore, matchType });
    }
  }

  // Sort matched products descending by score
  const sortedMatches = Array.from(scoredMap.values())
    .sort((a, b) => b.score - a.score)
    .map((m) => m.product);

  // Suggest Did you mean if a close intent/typo was resolved
  let didYouMean: string | undefined = undefined;
  if (sortedMatches.length > 0) {
    const topProd = sortedMatches[0];
    const topName = topProd.name_en.toLowerCase();
    if (!topName.includes(query) && query.length >= 4) {
      didYouMean = topProd.name_en;
    }
  }

  // Determine suggested category
  let suggestedCategory: string | undefined = undefined;
  if (sortedMatches.length > 0) {
    const topCategorySlug = sortedMatches[0].category;
    const cat = CATEGORIES.find((c) => c.slug === topCategorySlug);
    if (cat) {
      suggestedCategory = cat.name_en;
    }
  }

  return {
    query: rawQuery,
    normalizedQuery: query,
    products: sortedMatches,
    didYouMean,
    suggestedCategory,
  };
}
