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

struct CalculatorView: View {
    
    var body: some View {
        
        ZStack(alignment: .top) {
            
            Color
                .darkBackground
                .ignoresSafeArea()
            
            VStack(alignment: .center) {
                ThemePicker()
                
                CalculatorDisplay()
                
                NumericKeypad()

            }
            .padding(.top)
            
        }
    }
}

struct CalculatorView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            CalculatorView()
            CalculatorView()
        }
    }
}
