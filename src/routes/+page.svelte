<script>
  import Google from "@auth/core/providers/google";
  import { signIn, signOut } from '@auth/sveltekit/client'
  import { page } from '$app/stores'
</script>
<h1>PUBLIC</h1>

{#if $page.data.session?.user}
  <p>Signed in as {$page.data.session.user.email}</p>
  <button on:click={() => signIn('Google')}>Sign in</button> 
{:else}
  <p>Not signed in.</p>
  <button on:click={() => signIn('Google')}>Sign in</button>
{/if}
<a href='/protected'>protected route</a>