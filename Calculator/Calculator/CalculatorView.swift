//
//  ContentView.swift
//  Calculator
//
//  Created by Anthony Gedeon on 2/21/21.
//

import SwiftUI

enum Theme {
    
    case darkMode
    
    case whiteMode

}

struct Operators {
    
    func add() {
        
    }
    
    func subtract() {
        
    }
    
    func multiply() {
        
    }
    
    func divide() {
        
    }
    
    func equalTo() {
        
    }
}

struct Tools {
    
    func clearAll() {
        
    }
    
    func removeLastNumber() {
        
    }
    
    func convertToPercentage() {
        
    }
    
    func convertNumberToPositive() {
        
    }
    
    func convertNumberToNegative() {
        
    }
    
    func convertNumberToDecimalPoint() {
        
    }
}

struct CalculatorView: View {
    var body: some View {
        Text("Hello, world!")
            .padding()
    }
}

struct CalculatorView_Previews: PreviewProvider {
    static var previews: some View {
        CalculatorView()
    }
}
