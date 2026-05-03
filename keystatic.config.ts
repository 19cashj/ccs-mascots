// keystatic.config.ts
import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    pricingGuideCards: collection({
      label: 'Pricing Guide Cards',
      slugField: 'title',
      path: 'src/content/pricing-guide-cards/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Card Name' } }),
        price: fields.text({ label: 'Price' }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        description: fields.text({ label: 'Description' }),
      },
    }),
  },
  singletons: {
    home: singleton({
      label: 'Home Page',
      path: 'src/content/home',
      format: { data: 'json' },
      schema: {
        heroHeadlineLine1: fields.text({ label: 'Hero Headline Line 1', defaultValue: 'Costumes and' }),
        heroHeadlineLine2: fields.text({ label: 'Hero Headline Line 2', defaultValue: 'Fursuits, Maine' }),
        heroHeadlineLine3: fields.text({ label: 'Hero Headline Line 3', defaultValue: 'Made Your Way' }),
        heroTagline: fields.text({
          label: 'Hero Tagline',
          defaultValue: 'Affordable, Durable, Adorable Custom Costumes made just for you!',
        }),
        heroPrimaryButtonText: fields.text({ label: 'Hero Primary Button Text', defaultValue: 'Get a Quote' }),
        heroPrimaryButtonUrl: fields.url({
          label: 'Hero Primary Button URL',
          defaultValue:
            'https://docs.google.com/forms/d/e/1FAIpQLSdvfWdapp_bzKXglitzdxh65CiGRf7PifEItHlmHBU5zKwX_Q/viewform',
        }),
        heroSecondaryButtonText: fields.text({ label: 'Hero Secondary Button Text', defaultValue: 'Terms of Service' }),
        heroSecondaryButtonUrl: fields.url({
          label: 'Hero Secondary Button URL',
          defaultValue: 'https://docs.google.com/document/d/1TyKMxOpOX514vxL4cl_tLCc27aMnGeRZZWeNfWybef0/edit?tab=t.0',
        }),
        pricingTitle: fields.text({ label: 'Pricing Section Title', defaultValue: 'Price Guide' }),
        pricingDisclaimer: fields.text({
          label: 'Pricing Disclaimer',
          defaultValue:
            'Prices listed are for basic with no added extras. Costs may increase to reflect added details and design difficulty.',
        }),
        aboutTitle: fields.text({ label: 'About Section Title', defaultValue: 'About Us' }),
        aboutBody: fields.text({
          label: 'About Section Body',
          defaultValue:
            'Local to the Maine Furry Community since 2014, we have prided ourselves on providing Quality, Affordable Mascot Style Costumes. We use innovative methods such as 3D modeling and printing, as well as the finest fabrics and materials, to create a comfortable and durable costume that will last for years to come.',
        }),
        aboutImage: fields.image({
          label: 'About Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        ctaTitle: fields.text({
          label: 'CTA Title',
          defaultValue: 'Ready to Bring Your Character to Life?',
        }),
        ctaSubtitle: fields.text({
          label: 'CTA Subtitle',
          defaultValue: 'Custom fursuits built with love, right here in Maine.',
        }),
        ctaImage: fields.image({
          label: 'CTA Background Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        ctaButtonText: fields.text({ label: 'CTA Button Text', defaultValue: 'Get a Quote' }),
        ctaButtonUrl: fields.url({
          label: 'CTA Button URL',
          defaultValue:
            'https://docs.google.com/forms/d/e/1FAIpQLSdvfWdapp_bzKXglitzdxh65CiGRf7PifEItHlmHBU5zKwX_Q/viewform',
        }),
        footerTagline: fields.text({
          label: 'Footer Tagline',
          defaultValue:
            'Delivering smiles to the Furry Community and Costume Enthusiasts alike since 2014',
        }),
        footerLocation: fields.text({ label: 'Footer Location', defaultValue: 'Augusta ME, 04330' }),
        footerEmail: fields.text({ label: 'Footer Email', defaultValue: 'CraftyWolf@ccsmascots.net' }),
      },
    }),
    galleries: singleton({
      label: 'Galleries',
      path: 'src/content/galleries',
      format: { data: 'json' },
      schema: {
        marqueeGalleryImages: fields.array(
          fields.object(
            {
              image: fields.image({
                label: 'Image',
                directory: 'public/images',
                publicPath: '/images/',
              }),
              alt: fields.text({ label: 'Alt Text', defaultValue: '' }),
            },
            { label: 'Marquee Image' }
          ),
          { label: 'Marquee Gallery Images', defaultValue: [] }
        ),
        galleryPageImages: fields.array(
          fields.object(
            {
              image: fields.image({
                label: 'Image',
                directory: 'public/images',
                publicPath: '/images/',
              }),
              alt: fields.text({ label: 'Alt Text', defaultValue: '' }),
            },
            { label: 'Gallery Image' }
          ),
          { label: 'Gallery Page Images', defaultValue: [] }
        ),
      },
    }),
  },
});
