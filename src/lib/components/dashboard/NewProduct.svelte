<script>
	import { onMount, onDestroy } from 'svelte';
	import {
		Chart,
		BarElement,
		BarController,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend
	} from 'chart.js';

	let canvas;
	let chart;

	const data = {
		labels: ['', '', '', '', '', '', ''],
		datasets: [
			{
				data: [5, 7, 6, 7.5, 6.8, 8, 7.2],
				backgroundColor: '#ff6a3c',
				borderRadius: 6,
				barThickness: 16
			}
		]
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: { enabled: false }
		},
		scales: {
			x: {
				grid: { display: false, drawBorder: false },
				ticks: { display: false }
			},
			y: {
				beginAtZero: true,
				grid: { display: false, drawBorder: false },
				ticks: { display: false },
				suggestedMax: 10
			}
		}
	};

	onMount(() => {
		Chart.register(BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend);
		chart = new Chart(canvas.getContext('2d'), {
			type: 'bar',
			data,
			options
		});
	});

	onDestroy(() => {
		if (chart) chart.destroy();
	});
</script>

<div class="card new-products">
	<div class="left">
		<div class="title">Nuevos Productos</div>
		<div class="big">2,340</div>
		<div class="meta">
			<span class="growth">↑ 12.5%</span><span class="muted">Desde el mes pasado</span>
		</div>
	</div>

	<div class="chart-area">
		<canvas bind:this={canvas}></canvas>
	</div>
</div>

<style>
	.card.new-products {
		display: flex;
		justify-content: center;
		gap: 1rem;
		background: #fff;
		padding: 1.25rem;
		margin: 0rem 1rem 2rem 1rem;
		border-radius: 12px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		height: auto;
	}

	.left {
		display: flex;
		flex-direction: column;
	}

	.title {
		font-size: 1.4rem;
		font-weight: 600;
		color: #3a3a3a;
	}

	.big {
		font-size: 1.6rem;
		font-weight: 800;
		color: #111827;
		margin-top: 0.15rem;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.4rem;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.875rem;
		color: #8d8d8d;
	}

	.growth {
		color: #10b981;
		font-weight: 700;
	}

	.chart-area {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 110px;
		width: 100%;
		height: 180px;
	}

	.chart-area canvas {
		width: 100% !important;
		height: 100% !important;
	}

	@media (max-width: 768px) {
		.card.new-products {
			flex-direction: column;
			margin: 0rem 2rem 2rem 1rem;
		}

		.chart-area {
			height: 120px;
		}
	}
</style>
