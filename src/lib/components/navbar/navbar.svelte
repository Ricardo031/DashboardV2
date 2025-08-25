<script>
    import Menu from '../menu/menu.svelte';
    let showSidebar = false;
</script>

<main>
	<nav class="navbar">
		<div class="navbar-left">
			<button class="menu-btn" aria-label="Abrir menú de navegación" on:click={() => showSidebar = !showSidebar}>
                {#if showSidebar}
                    <svg width="24" height="24" fill="none" stroke="#3b3e44" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
                {:else}
                <svg width="24" height="24" fill="none" stroke="#3b3e44" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                {/if}
			</button>
			<img src="/favicon.svg" alt="Logo" class="logo" />
			<span class="brand"></span>
		</div>

		<div class="navbar-right">
			<button class="icon-btn" aria-label="Notificaciones"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="icon icon-tabler icons-tabler-filled icon-tabler-bell"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
					/><path
						d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
					/></svg
				></button
			>

			<button class="icon-btn" aria-label="Modo claro/oscuro"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="icon icon-tabler icons-tabler-filled icon-tabler-sun"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
					/><path
						d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"
					/><path
						d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
					/><path
						d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
					/><path
						d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
					/><path
						d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"
					/><path
						d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
					/><path
						d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
					/><path
						d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
					/></svg
				></button
			>

			<button class="icon-btn" aria-label="Espacios"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-spaces"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M6.045 9.777a6 6 0 1 0 5.951 .023"
					/><path d="M11.997 20.196a6 6 0 1 0 -2.948 -5.97" /><path
						d="M17.95 9.785q .05 -.386 .05 -.785a6 6 0 1 0 -3.056 5.23"
					/></svg
				></button
			>
		</div>
	</nav>
    <Menu open={showSidebar} onClose={() => showSidebar = false} />
</main>

<style>
	:root {
        --navbar-height: 64px;
    }

	* {
		box-sizing: border-box;
		margin: 0;
	}
	:global(body) {
		background-color: #F9FAFB;
	}

	.navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: var(--navbar-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8c5a3;
        color: black;
        padding: 0.5rem 1.5rem 0.5rem 0.5rem;
        z-index: 1000;
        border-bottom: 2px solid #f57c00;
        box-sizing: border-box;
    }

	.navbar-left {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.menu-btn {
		background: none;
		border: none;
		color: #3b3e44;
		cursor: pointer;
		padding: 2px 4px;
	}

	.menu-btn:hover {
		background: #f7ddce;
		border-radius: 8px;
	}

	.logo {
		width: 32px;
		height: 32px;
	}

	.brand {
		font-size: 1.5rem;
		font-weight: 500;
		font-family: Arial, Helvetica, sans-serif;
		margin-left: 0.2rem;
	}

	.navbar-right {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.icon-btn {
		background: none;
		border: none;
		color: #3b3e44;
		font-size: 1.2rem;
		cursor: pointer;
		margin-left: 4px;
	}

	.icon-btn:hover {
		background: #f7ddce;
		border-radius: 8px;
	}
</style>
