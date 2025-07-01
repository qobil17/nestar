import { Controller, Get, Logger } from '@nestjs/common';
import { BatchService } from './batch.service';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { BATCH_ROLLBACK, BATCH_TOP_AGENTS, BATCH_TOP_PROPERTIES } from './lib/config';

@Controller()
export class BatchController {
	private logger: Logger = new Logger('BatchController');

	constructor(private readonly batchService: BatchService) {}

	@Timeout(1000)
	handleTimeout() {
		this.logger.debug('BATCH SERVER READY');
	}

	@Cron('00 * * * * *', { name: BATCH_ROLLBACK })
	public batchRollback() {
		this.logger['context'] = BATCH_ROLLBACK;
		this.logger.debug('EXECUTED!');
	}

	@Cron('20 * * * * *', { name: BATCH_TOP_PROPERTIES })
	public batchProperties() {
		this.logger['context'] = BATCH_TOP_PROPERTIES;
		this.logger.debug('EXECUTED!');
	}

	@Cron('40 * * * * *', { name: BATCH_TOP_AGENTS })
	public batchAgents() {
		this.logger['context'] = BATCH_TOP_AGENTS;
		this.logger.debug('EXECUTED!');
	}

	/* 	@Interval(1000)
	handleInterval() {
		this.logger.debug('INTERNAL TEST');
  }*/

	@Get()
	getHello(): string {
		return this.batchService.getHello();
	}
}
