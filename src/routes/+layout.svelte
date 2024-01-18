<script>
  import { afterNavigate } from "$app/navigation";
  import "../app.css";

  afterNavigate(() => {
    HSStaticMethods.autoInit();
  });
</script>

<slot />