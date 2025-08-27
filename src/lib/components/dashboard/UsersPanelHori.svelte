<script>
	import { onMount, onDestroy, tick } from 'svelte';
	import {
		Chart,
		BarElement,
		BarController,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend
	} from 'chart.js';
	import { scale } from 'svelte/transition';

	let canvas;
	let chart;

	const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'];
	const counts = [4420, 6588, 1607, 9204, 845, 4800, 5120];
	const percentages = counts.map((c) => Math.round((c / Math.max(...counts)) * 100));
	const remainder = percentages.map((p) => 100 - p);

	const mainCount = counts[0];

	const data = {
		labels,
		datasets: [
			{
				label: 'Uso',
				data: percentages,
				backgroundColor: '#ff6a3c',
				stack: 'stack1',
				borderRadius: 8,
				barThickness: 12
			},
			{
				label: 'Restante',
				data: remainder,
				backgroundColor: '#eef2f5',
				stack: 'stack1',
				borderRadius: 8,
				barThickness: 12
			}
		]
	};

	const options = {
		indexAxis: 'y',
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: {
				callbacks: {
					label: (ctx) => {
						const i = ctx.dataIndex;
						const cnt = counts[i];
						const pct = percentages[i];
						return `${cnt.toLocaleString()} usuarios - ${pct}%`;
					}
				}
			}
		},
		scales: {
			x: {
				beginAtZero: true,
				max: 100,
				display: false,
				stacked: true
			},
			y: {
				grid: { display: false, drawBorder: false },
				ticks: { color: '#6b280' },
				stacked: true
			}
		},
		interaction: { mode: 'index', intersect: false }
	};

	onMount(() => {
		Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);
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

<div class="panel user-panel-hori">
	<div class="panel-left">
		<h3 class="title">Usuarios</h3>
		<h2 class="price">{mainCount.toLocaleString()}</h2>
		<p class="subtitle">
			<span class="down">↓3.4%</span> <span class="muted">Desde el mes pasado</span>
		</p>
	</div>

	<div class="chart-wrap">
		<canvas bind:this={canvas}></canvas>
	</div>
</div>

<style>
	.user-panel-hori {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		padding: 1.25rem;
		margin: 0rem 1rem 2rem 1rem;
		border-radius: 12px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	}

	.panel-left {
		flex: 0 0 36%;
		min-width: 180px;
	}

	.title {
		margin: 0;
		font-size: 1.5rem;
		color: #3a3a3a;
		font-weight: 800;
	}

	.price {
		margin: 6px 0 0;
		font-size: 1.6rem;
		font-weight: 800;
		color: #111827;
	}

	.subtitle {
		margin: 6px 0 0;
		font-size: 0.95rem;
		color: #9aa0a6;
	}

	.down {
		color: #ef4444;
		font-weight: 600;
		margin-right: 0.5rem;
	}

	.chart-wrap {
		display: flex;
		flex: 1 1 auto;
		height: 180px;
		align-items: center;
		justify-content: center;
	}

	canvas {
		width: 100% !important;
		height: 100% !important;
		display: block;
		max-width: 520px;
	}

	@media (max-width: 768px) {
		.user-panel-hori {
			flex-direction: column;
			align-items: stretch;
		}
		.panel-left {
			flex: none;
			margin-bottom: 0.5rem;
		}
		.chart-wrap {
			height: 180px;
		}
	}
</style>
