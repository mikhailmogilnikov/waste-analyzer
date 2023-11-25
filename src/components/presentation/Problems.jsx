import ProblemCard from './ProblemCard';

const Problems = () => {
    return (
        <div className="wrapper">
            <h2 className="text-mini-title">Проблематика</h2>
            <div className="problem-wrapper">
                <ProblemCard
                    name={'Подмена и сброс'}
                    desc={
                        'Недобросовестные перевозчики могут осуществить подлог отходов.'
                    }
                    icon="Graph"
                />
                <ProblemCard
                    name={'Ручная обработка'}
                    desc={
                        'Контролировать вручную сотни грузоперевозок в день не предоставляется возможным.'
                    }
                    icon="CurrencyRub"
                />
                <ProblemCard
                    name={'Финансовые риски'}
                    desc={
                        'Затраты на оплату по повышенному тарифу и некорректные перевозки.'
                    }
                    icon="Warning"
                />
            </div>
        </div>
    );
};

export default Problems;
