<script>
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import ChartPanel from '$lib/components/dashboard/ChartPanel.svelte';
	import StatisticPanel from '$lib/components/dashboard/StatisticPanel.svelte';

	
</script>

<Navbar />

<main class="dashboard">
	<section class="top-section">
		<div class="chart-wrapper no-center">
			<ChartPanel />
		</div>

		<div class="stats-wrapper">
			<StatisticPanel />
		</div>
	</section>

	<section class="bottom-section">
		<!-- Aquí irán los demás paneles -->
		<div class="card">Panel 1</div>
		<div class="card">Panel 2</div>
		<div class="card">Panel 3</div>
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: 'inter';
		background-color: #f9f9f9;
	}
	.chart-wrapper.no-center :global(canvas) {
		margin-left: 0 !important;
		margin-right: auto !important;
	}

	main.dashboard {
		padding: calc(var(--navbar, 64px) + 2rem) 0 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.top-section {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		align-items: start;
	}

	.chart-wrapper,
	.stats-wrapper {
		width: 100%;
	}

	.bottom-section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.card {
		background: #fff;
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
		text-align: center;
		color: #777;
		font-weight: 500;
	}

	@media (max-width: 1024px) {
		.top-section {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		main.dashboard {
			padding: 1rem;
		}
	}
</style>
