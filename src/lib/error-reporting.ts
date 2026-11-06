/** Registra falhas da aplicação localmente para facilitar a depuração. */
export function reportApplicationError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  console.error("Erro na aplicação", {
    error,
    route: typeof window === "undefined" ? undefined : window.location.pathname,
    ...context,
  });
}
