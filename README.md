# Trabajar en local

La primera vez, ejecutar

```bash
npm install
```

Luego, ejecutar

```bash
netlify dev
```

# Hacer deploy si hay cambios en las functions

Para que funcione, por ahora estoy haciendo lo siguiente:

1 - En una pestaña de la terminal, lanzo la versión de servidor de desarrollo con

```bash
netlify dev
```

para que funcionen las llamadas a las functions. Si no, al llamarlas desde el build dice que no funcionan

2 - En otra pestaña de la terminal, hago un build del proyecto

```bash
netlify build
```

3 - En esa misma pestaña, hago una prueba del deploy

```bash
netlify deploy
```

4 - Si todo va bien, lo subo a producción

```bash
netlify deploy --prod
```

# Artículos interesantes

https://www.netlify.com/blog/deploy-an-astro-site-with-forms-serverless-functions-and-redirects/

https://www.netlify.com/blog/2021/07/23/build-a-modern-shopping-site-with-astro-and-serverless-functions/

https://docs.directus.io/guides/headless-cms/trigger-static-builds/netlify.html#triggering-static-site-builds-with-netlify

Para hacer que las imágenes vayan también al servidor de Netlify  
https://docs.netlify.com/image-cdn/overview/#remote-path

Ante problemas con el envío de formularios  
https://answers.netlify.com/t/support-guide-form-problems-form-debugging-404-when-submitting/92
