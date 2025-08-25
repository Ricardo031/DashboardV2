<script>
	import { preventDefault } from 'svelte/legacy';

	export let open = false;
	export let onClose = () => {};
	let showLayouts = false;
	let showCrud = false;
</script>

{#if open}
	<div class="sidebar-backdrop" role="button" tabindex="0" aria-label="Cerrar menu lateral" on:click={onClose} on:keydown={(e) => (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') && onClose}></div>
	<aside class="sidebar">
		<ul>
			<li>
				<button class="sidebar-normal">
					<svg
						width="20"
						height="20"
						fill="none"
						stroke="#f57c00"
						stroke-width="2"
						viewBox="0 0 24 24"
						><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" /></svg
					>
					Dashboard
				</button>
			</li>
			<li>
				<!-- cambiemos el 'a' por 'button' -->
				<button
					class="sidebar-toggle"
					aria-expanded={showLayouts}
					aria-controls="submenu-layouts"
					on:click|preventDefault={() => (showLayouts = !showLayouts)}
				>
					<svg
						width="20"
						height="20"
						fill="none"
						stroke="#f57c00"
						stroke-width="2"
						viewBox="0 0 24 24"
						><rect x="3" y="3" width="7" height="7" /><rect
							x="14"
							y="3"
							width="7"
							height="7"
						/><rect x="14" y="14" width="7" height="7" /><rect
							x="3"
							y="14"
							width="7"
							height="7"
						/></svg
					>
					Layouts
					<svg
						width="16"
						height="16"
						style="margin-left:auto"
						fill="none"
						stroke="#3b3e44"
						stroke-width="2"
						viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg
					>
				</button>

				{#if showLayouts}
					<ul class="submenu">
						<li><a href="#top">Layout 1</a></li>
						<li><a href="#top">Layout 2</a></li>
					</ul>
				{/if}
			</li>
			<li>
				<button class="sidebar-toggle" aria-expanded={showCrud} aria-controls="submenu-crud" on:click|preventDefault={() => (showCrud = !showCrud)}>
					<svg
						width="20"
						height="20"
						fill="none"
						stroke="#f57c00"
						stroke-width="2"
						viewBox="0 0 24 24"
						><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg
					>
					CRUD
					<svg
						width="16"
						height="16"
						style="margin-left:auto"
						fill="none"
						stroke="#3b3e44"
						stroke-width="2"
						viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg
					>
				</button>
				{#if showCrud}
					<ul class="submenu">
						<li><a href="#top">Usuario</a></li>
						<li><a href="#top">Productos</a></li>
					</ul>
				{/if}
			</li>
			<li>
				<button class="sidebar-normal">
					<svg
						width="20"
						height="20"
						fill="none"
						stroke="#f57c00"
						stroke-width="2"
						viewBox="0 0 24 24"
						><circle cx="12" cy="12" r="3" /><path
							d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
						/></svg
					>
					Settings
				</button>
			</li>
		</ul>
	</aside>
{/if}

<style>
	.sidebar-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.15);
		z-index: 10;
	}

	.sidebar {
		position: fixed;
		top: 64px;
		left: 0;
		width: 220px;
		height: calc(100vh - 64px); /* Mejor ajuste */
		background: white;
		box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
		padding: 2rem 1rem;
		z-index: 20;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.sidebar ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.sidebar li {
		margin-bottom: 1rem;
	}

	.sidebar-normal,
	.sidebar-toggle {
		color: #3b3e44;
		text-decoration: none;
		font-size: 1.1rem;
		font-weight: 500;
		font-family: Arial, Helvetica, sans-serif;
		display: flex;
		align-items: center;
		gap: 0.7rem;
		padding: 0.5rem 0.7rem;
		border-radius: 6px;
		background: none;
		border: none;
		width: 100%;
		cursor: pointer;
		transition: background 0.2s, color 0.2s;
	}

	.sidebar-normal:hover,
	.sidebar-toggle:hover {
		background: #fff3e6;
		color: #f57c00;
	}

	.submenu li {
        margin-left: 3.8rem;
		margin-bottom: 0.6rem;
        
	}

	.submenu a {
		font-size: 1.1rem;
        font-family: Arial, Helvetica, sans-serif;
		color: #3b3e44;
		background: none;
        text-decoration: none;
	}
</style>
