import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SeoConfig = {
  title: string;
  description: string;
  canonicalPath: string;
  ogImagePath?: string;
  robots?: string;
};

const SITE_URL = 'https://www.demensenwijzer.nl';
const DEFAULT_OG_IMAGE_PATH = '/lovable-uploads/047ec1ae-aebc-461e-892b-8c64cbed9bf6.png';
const DEFAULT_ROBOTS = 'index, follow';

const SEO_BY_PATH: Record<string, SeoConfig> = {
  '/': {
    title: 'De Mensen Wijzer | Identiteit, richting en begeleiding die klopt',
    description:
      'De Mensen Wijzer helpt experts, leiders en professionals om dichter bij zichzelf te leven en werken, met begeleiding rond identiteit, richting en persoonlijke profilering.',
    canonicalPath: '/',
  },
  '/over-mij': {
    title: 'Over mij | Sipke Jan Bousema | De Mensen Wijzer',
    description:
      'Lees het verhaal van Sipke Jan Bousema en ontdek hoe zijn achtergrond in media, communicatie en persoonlijke begeleiding samenkomt in De Mensen Wijzer.',
    canonicalPath: '/over-mij',
    ogImagePath: '/lovable-uploads/bdfac387-5ddd-4dd1-8d53-f573fa83f5b9.png',
  },
  '/training': {
    title: 'Training Invloedrijke Spreker | De Mensen Wijzer',
    description:
      'Ontdek de training Invloedrijke Spreker en leer spreken vanuit identiteit, congruentie en een verhaal dat echt bij je past.',
    canonicalPath: '/training',
    ogImagePath: '/lovable-uploads/hero-training.png',
  },
  '/identiteit-merkontwikkeling': {
    title: 'De Mensen Wijzer | Identiteit, richting en begeleiding die klopt',
    description:
      'De Mensen Wijzer helpt experts, leiders en professionals om dichter bij zichzelf te leven en werken, met begeleiding rond identiteit, richting en persoonlijke profilering.',
    canonicalPath: '/',
  },
  '/communicatie-mediastrategie': {
    title: 'De Mensen Wijzer | Identiteit, richting en begeleiding die klopt',
    description:
      'De Mensen Wijzer helpt experts, leiders en professionals om dichter bij zichzelf te leven en werken, met begeleiding rond identiteit, richting en persoonlijke profilering.',
    canonicalPath: '/',
  },
  '/presentatie-profilering': {
    title: 'De Mensen Wijzer | Identiteit, richting en begeleiding die klopt',
    description:
      'De Mensen Wijzer helpt experts, leiders en professionals om dichter bij zichzelf te leven en werken, met begeleiding rond identiteit, richting en persoonlijke profilering.',
    canonicalPath: '/',
  },
  '/werkwijze': {
    title: 'De Mensen Wijzer | Identiteit, richting en begeleiding die klopt',
    description:
      'De Mensen Wijzer helpt experts, leiders en professionals om dichter bij zichzelf te leven en werken, met begeleiding rond identiteit, richting en persoonlijke profilering.',
    canonicalPath: '/',
  },
  '/contact': {
    title: 'Contact | De Mensen Wijzer',
    description:
      'Neem contact op met De Mensen Wijzer voor een kennismaking over identiteit, richting en begeleiding die past bij wie je werkelijk bent.',
    canonicalPath: '/',
  },
};

const DEFAULT_SEO = SEO_BY_PATH['/'];

const ensureMetaTag = (selector: string, attribute: 'name' | 'property', value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  return element;
};

const ensureLinkTag = (rel: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  return element;
};

const Seo = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = SEO_BY_PATH[location.pathname] ?? DEFAULT_SEO;
    const canonicalUrl = new URL(seo.canonicalPath, SITE_URL).toString();
    const ogImageUrl = new URL(seo.ogImagePath ?? DEFAULT_OG_IMAGE_PATH, SITE_URL).toString();
    const robots = seo.robots ?? DEFAULT_ROBOTS;

    document.documentElement.lang = 'nl';
    document.title = seo.title;

    ensureMetaTag('meta[name="description"]', 'name', 'description').setAttribute('content', seo.description);
    ensureMetaTag('meta[name="robots"]', 'name', 'robots').setAttribute('content', robots);
    ensureMetaTag('meta[property="og:title"]', 'property', 'og:title').setAttribute('content', seo.title);
    ensureMetaTag('meta[property="og:description"]', 'property', 'og:description').setAttribute('content', seo.description);
    ensureMetaTag('meta[property="og:type"]', 'property', 'og:type').setAttribute('content', 'website');
    ensureMetaTag('meta[property="og:url"]', 'property', 'og:url').setAttribute('content', canonicalUrl);
    ensureMetaTag('meta[property="og:image"]', 'property', 'og:image').setAttribute('content', ogImageUrl);
    ensureMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card').setAttribute('content', 'summary_large_image');
    ensureMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title').setAttribute('content', seo.title);
    ensureMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description').setAttribute('content', seo.description);
    ensureMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image').setAttribute('content', ogImageUrl);

    ensureLinkTag('canonical').setAttribute('href', canonicalUrl);
  }, [location.pathname]);

  return null;
};

export default Seo;
