class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
        this.wineCounter = 0;
    }
    reserveABottle(wineName, wineType, price) {
        if (this.wineCounter == this.space) {
            throw new Error('Not enough space in the cellar.')
        } else {
            let wine = {
                wineName: wineName,
                wineType: wineType,
                price: price,
                paid: false
            }
            this.wines.push(wine);
            this.wineCounter++;
            return `You reserved a bottle of ${wineName} ${wineType} wine.`;
        }
    }
    payWineBottle(wineName, price) {
        let currentWine = this.wines.find(w => w.wineName == wineName);
        if (currentWine) {
            if (currentWine.paid) {
                throw new Error(`${wineName} has already been paid.`)
            } else {
                this.bill += Number(currentWine.price);
                currentWine.paid = true;
                return `You bought a ${wineName} for a ${price}$.`;
            }
        } else {
            throw new Error(`${wineName} is not in the cellar.`);
        }
    }
    openBottle(wineName) {
        let currentWine = this.wines.find(w => w.wineName == wineName);
        if (currentWine) {
            if (!currentWine.paid) {
                throw new Error(`${wineName} need to be paid before open the bottle.`)
            } else {
                let index = this.wines.indexOf(currentWine);
                this.wines.splice(index, 1);
                return `You drank a bottle of ${wineName}.`;
            }
        } else {
            throw new Error("The wine, you're looking for, is not found.");
        }
    }
    cellarRevision(wineType) {
        let result = [];
        if (wineType == undefined) {
            result[0] = `You have space for ${this.space - this.wines.length} bottles more.`;
            result[1] = `You paid ${this.bill}$ for the wine.`;
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName))
            .forEach((wine, index) => {
                this.wines[index] = `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`});
            result.push(...this.wines);
            return `${result.join('\n').trim()}`;
        } else {
            let currentWine=this.wines.find(a => a.wineType==wineType);
            if (currentWine) {
                return `${currentWine.wineName} > ${currentWine.wineType} - ${currentWine.paid ? 'Has Paid':'Not Paid'}.`
            } else {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
        }
    }
}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());




