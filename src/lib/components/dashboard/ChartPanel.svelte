<script>
	import {
		Chart as ChartJS,
		LineController,
		LineElement,
		PointElement,
		LinearScale,
		Title,
		CategoryScale,
		Tooltip,
		Legend
	} from 'chart.js';
	import { onMount } from 'svelte';

	let canvas;

	onMount(() => {
		ChartJS.register(
			LineController,
			LineElement,
			PointElement,
			LinearScale,
			Title,
			CategoryScale,
			Tooltip,
			Legend
		);

		const data = {
			labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
			datasets: [
				{
					label: 'Ganancias',
					data: [6400, 6200, 6300, 6700, 6600, 6800, 6700],
					borderColor: '#FF3E00',
					backgroundColor: 'FF3E00',
					pointBackgroundColor: '#FF3E00',
					pointRadius: 5,
					pointHoverRadius: 6,
					fill: true,
					tension: 0.4
				},
				{
					label: 'Ganancias (Periodo Previo)',
					data: [6600, 6400, 6200, 6500, 6700, 6800, 6600],
					borderColor: '#ffb97a',
					backgroundColor: 'ffb97a',
					pointBackgroundColor: '#ffb97a',
					pointRadius: 4,
					pointHoverRadius: 6,
					fill: true,
					tension: 0.4
				}
			]
		};

		const options = {
			responsive: true,
			plugins: {
				legend: {
					display: true,
					labels: {
						color: '#000',
						usePointStyle: true,
						pointStyle: 'circle'
					}
				},
				title: {
					display: false
				}
			},
			scales: {
				x: {
					grid: {
						display: false
					},
					ticks: {
						color: '#333'
					}
				},
				y: {
					min: 6000,
					max: 6900,
					ticks: {
						stepSize: 200,
						color: '#333'
					}
				}
			}
		};

		new ChartJS(canvas, {
			type: 'line',
			data,
			options
		});
	});
</script>

<div class="panel">
	<div class="panel-header">
		<div class="panel-price">
			<h2 class="price">$45,385</h2>
			<p class="subtitle">Ventas estas semana</p>
		</div>
		<span class="panel-growth">↑ 12.5%</span>
	</div>
	<canvas bind:this={canvas}></canvas>
	<div class="panel-footer">
		<span>Ultimos 7 dias</span>
		<a href="#top" class="report-link">Informe de Ventas ></a>
	</div>
</div>

<style>
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
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
		padding: 1rem 2rem 1rem 2rem;
		margin: 0rem 2rem 2rem 1rem;
	}

	.panel-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.panel-price {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
	}

	.price {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0;
		font-family: 'Inter';
		color: #3a3a3a;
	}

	.subtitle {
		color: #888;
		font-weight: 500;
		margin: auto;
	}

	.panel-growth {
		color: #1bc47d;
		font-weight: 700;
		font-size: 1.1rem;
		font-family: 'Inter';

	}

	.panel-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
		border-top: 2px solid #eee;
		padding-top: 1rem;
		font-family: 'Inter';
	}

	.report-link {
		color: #ff3e00;
		font-weight: 600;
		text-decoration: none;
		padding: 8px 12px;
		border-radius: 8px;
	}

	.report-link:hover {
		background: #e4e4e475;
	}

	canvas {
		width: 90% !important;
		height: 380px !important;
		display: block;
		margin: 0 auto;
	}
</style>
