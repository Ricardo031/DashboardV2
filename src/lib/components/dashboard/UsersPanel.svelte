<script>
	import { onMount, onDestroy, mount, tick } from 'svelte';
	import {
		Chart,
		BarElement,
		BarController,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend,
		Ticks,
		Colors,
		Interaction
	} from 'chart.js';
	import { scale } from 'svelte/transition';

	let canvas;
	let chart;

	const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'];
	const counts = [4420, 6588, 1607, 9204, 845, 4800, 5120];
	const percentages = counts.map((c) => Math.round((c / Math.max(...counts)) * 100));
	const remainder = percentages.map((p) => 100 - p);

	const mainCount = counts[0];

	const data = {
		labels: meses,
		datasets: [
			{
				label: 'Uso',
				data: percentages,
				backgroundColor: '#ff6a3c',
				stack: 'stack1',
				borderRadius: 8,
				barThickness: 18
			},
			{
				label: 'Restante',
				data: remainder,
				backgroundColor: '#eef2f5',
				stack: 'stack1',
				borderRadius: 8,
				barThickness: 18
			}
		]
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			Legend: { display: false },
			tooltip: {
				callbacks: {
					label: function (context) {
						const i = context.dataIndex;
						const pct = percentages[i];
						const cnt = counts[i];
						return `${cnt.toLocaleString()} usuarios - ${pct}%`;
					}
				}
			}
		},
		scales: {
			x: {
				grid: { display: false, drawBorder: false },
				ticks: { Color: '#9aa0a6' }
			},
			y: {
				beginAtZero: true,
				max: 100,
				display: false,
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

<div class="panel users-panel">
	<div class="panel-header">
		<div class="panel-price">
			<h3 class="title">Usuarios</h3>
			<h2 class="price">{mainCount.toLocaleString()}</h2>
			<p class="subtitle"><span class="down">↓3.4%</span></p>
		</div>
	</div>

	<div class="chart-wrap">
		<canvas bind:this={canvas}></canvas>
	</div>
</div>

<style>
	.users-panel {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: #fff;
		padding: 1.25rem;
		margin: 0rem 1rem 2rem 1rem;
		border-radius: 12px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		height: auto;
	}

	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.5rem;
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
		margin-right: 0.6rem;
	}

	.chart-wrap {
		height: 150px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	canvas {
		width: 100% !important;
		height: 100% !important;
		display: block;
	}

	@media (max-width: 768px) {
		.users-panel {
			flex-direction: column;
			margin: 0rem 2rem 2rem 1rem;
			gap: 0;
			align-items: self-start;
		}

		.chart-wrap {
			height: 160px;
		}
	}
</style>
