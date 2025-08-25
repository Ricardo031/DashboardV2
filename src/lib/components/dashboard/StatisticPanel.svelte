<script>
	export let items = [
		{
			img: '/Mockups/iphone6.png',
			name: 'iPhone 6 pro',
			change: 2.5,
			price: 445467
		},
		{
			img: '/Mockups/compu.png',
			name: 'Compu inclinada',
			change: 12.5,
			price: 256982
		},
		{
			img: '/Mockups/smartwatch.png',
			name: 'apple watch 7',
			change: -2.5,
			price: 201869
		},
		{
			img: '/Mockups/tableta.png',
			name: 'xiaomi redmi pad 2',
			change: -5.5,
			price: 103967
		},
		{
			img: '/Mockups/termo.png',
			name: 'termo tech',
			change: 2.5,
			price: 98543
		}
	];

	const customers = [
		{
			avatar: '/perfil/perfil1.jpeg',
			name: 'Neil Sims',
			email: 'neil.sims@flowbite.com',
			price: 944
		},
		{
			avatar: '/perfil/perfil2.jpg',
			name: 'Roberta Casas',
			email: 'roberta.casas@flowbite.com',
			price: 6588
		},
		{
			avatar: '/perfil/perfil3.jpg',
			name: 'Michael Gough',
			email: 'michael.gough@flowbite.com',
			price: 1607
		},
		{
			avatar: '/perfil/perfil4.jpg',
			name: 'Jese Leos',
			email: 'jese.leos@flowbite.com',
			price: 9204
		},
		{
			avatar: '/perfil/perfil5.jpg',
			name: 'Bonnie Green',
			email: 'bonnie.green@flowbite.com',
			price: 35
		}
	];

	/** @type {(n:number)=>string} */
	const fmt = (n) => '$' + n.toLocaleString();

	let tab = 'products';
	const selectTab = (t) => (tab = t);
</script>

<div class="panel stats-panel" role="region" aria-label="Statistcs this month">
	<div class="panel-header">
		<h3 class="title">Estadisticas del mes</h3>
		<nav class="tabs" aria-label="tabs">
			<button
				class="tab"
				on:click={() => selectTab('products')}
				aria-pressed={tab === 'products'}
				class:active={tab === 'products'}>Mejores Productos</button
			>
			<button
				class="tab tab2"
				on:click={() => selectTab('customers')}
				aria-pressed={tab === 'customers'}
				class:active={tab === 'customers'}>Mejores Vendedores</button
			>
		</nav>
	</div>

	<ul class="items">
		{#if tab === 'products'}
			{#each items as item}
				<li class="item">
					<div class="left">
						<img class="thumb" src={item.img} alt={item.name} />
						<div class="meta">
							<div class="name">{item.name}</div>
							<div class="change {item.change > 0 ? 'pos' : 'neg'}">
								<span class="arrow" aria-hidden="true">{item.change > 0 ? '↑' : '↓'}</span>
								{Math.abs(item.change)}% <span class="vs">vs ultimo mes</span>
							</div>
						</div>
					</div>

					<div class="price" aria-label="price">{fmt(item.price)}</div>
				</li>
			{/each}
		{:else}
			{#each customers as c}
				<li class="item">
					<div class="left">
						<img class="avatar" src={c.avatar} alt={c.name} />
						<div class="meta">
							<div class="name">{c.name}</div>
							<div class="email">{c.email}</div>
						</div>
					</div>

					<div class="price" aria-label="price">{fmt(c.price)}</div>
				</li>
			{/each}
		{/if}
	</ul>

	<div class="panel-footer">
		<span class="period">Ultimos 7 dias</span>
		<a class="report-link" href="#report">Reporte completo &gt;</a>
	</div>
</div>

<style>
	:global(:root) {
		--accent: #ff3e00;
		--text: #1e1f20;
		--bg: #0f1724;
		--muted: #3a3a3a;
		--panel-bg: white;
		--pos: #1bc47d;
		--neg: #ff6b6b;
		--panel-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
	}

	:global(html, body) {
		font-family:
			'Inter',
			system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial;
	}

	.panel {
		background: white;
		border-radius: 12px;
		box-shadow: var(--panel-shadow);
		margin: 0rem 2rem 2rem 1rem;
		padding: 1.25rem;
		font-family:
			'Inter',
			system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial;
		color: var(--text);
		height: 509px;
	}

	.panel-header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: start;
		margin-bottom: 0.75rem;
	}

	.title {
		margin: 0 0 1.4rem;
		font-size: 1.05rem;
		font-weight: 700;
		text-align: start;
	}

	.tabs {
		width: 100%;
		display: flex;
	}

	.tab {
		background: transparent;
		border: 0.1rem solid #d5d6e4;
		font-family: 'Inter';
		width: 100%;
		padding: 0.8rem 0;
		border-radius: 4px 0 0 4px;
		color: var(--muted);
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.07);
	}
	.tab2 {
		border-radius: 0 4px 4px 0;
	}

	.tab.active,
	.tab[aria-pressed='true'] {
		color: var(--accent);
		background: #ff3e0014;
		border-color: #fc632618;
	}

	.items {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-top: 1px solid rgba(133, 133, 133, 0.322);
		padding: 0.6rem 0;
	}

	.item:first-child {
		border-top: none;
		padding-top: 0.4rem;
	}

	.left {
		display: flex;
		align-items: center;
		gap: 0.9rem;
	}

	.thumb {
		width: 45px;
		height: 45px;
		object-fit: contain;
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.03);
		padding: 4px;
	}

	.avatar {
		width: 46px;
		height: 46px;
		object-fit: cover;
		border-radius: 100%;
		border: 2px solid rgba(255, 255, 255, 0.03);
	}

	.meta {
		display: flex;
		flex-direction: column;
	}

	.name {
		font-weight: 700;
		font-size: 0.95rem;
		color: #3a3a3a;
	}

	.email {
		font-size: 0.85rem;
		color: var(--muted);
		margin-top: 0.18rem;
	}

	.change {
		font-size: 0.85rem;
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
		gap: 0.45rem;
		color: var(--muted);
	}

	.change.pos {
		color: var(--pos);
	}

	.change.neg {
		color: var(--neg);
	}

	.vs {
		color: #3a3a3a;
		font-weight: 500;
		margin-left: 0.25rem;
	}

	.price {
		display: flex;
		align-items: center;
		font-weight: 800;
		color: #3a3a3a;
	}

	.panel-footer {
		display: flex;
		justify-content: space-between;
		align-items: end;
		margin-top: 0.75rem;
		padding-top: 0.95rem;
		border-top: 1px solid rgba(2, 2, 2, 0.233);
	}

	.report-link {
		color: var(--accent);
		font-weight: 600;
		text-decoration: none;
	}
</style>
