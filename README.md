# POC de Arquitetura do Angular

POC de uma arquitetura do Angular para projetos, dando opção de fazer pre-loading dos módulos que desejar. Por default é lazy-loading.

## Base

O arquivo `src/app/strategies/app-preloading-strategy.ts` é o que faz permitir esta estratégia de carregamento de módulos. Em `app-routing.module.ts`, edite:

```ts
RouterModule.forRoot(routes, {
  preloadingStrategy: AppPreloadingStrategy
});
```

Adicione também em `app.module.ts` o provider para a estratégia:

```ts
providers: [AppPreloadingStrategy],
```

Nas rotas que deseja carregar no início da execução do projeto, é só passar na rota:

```ts
{
  path: "about",
  loadChildren: () =>
    import("./pages/about/about.module").then(
      m => m.AboutModule
    ),
  data: { title: "About", preload: true }
}
```

## Gerando os módulos

```sh
ng g m pages/about --route about --module app.module
```

Sendo as variáveis:

- `ng g m`: Gera módulo
- `pages/about`: Localização de onde será gerado o módulo + nome (about)
- `--route about`: Adição da chamada do módulo na rota com o nome que definir (about)
- `--module app.module`: Define em qual routing será chamado esse módulo (app-routing.module.ts)
