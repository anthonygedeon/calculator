//
//  ThemePickerView.swift
//  Calculator
//
//  Created by Anthony Gedeon on 2/22/21.
//

import SwiftUI

struct ThemePicker: View {
   
    var body: some View {
        HStack {
            
            Image("sun-svg")
                .resizable()
                .frame(width: 24, height: 24)
                .aspectRatio(contentMode: .fit)
                .foregroundColor(Color.themeIconDefault)
            
            Spacer()
            
            Image("moon-svg")
                .resizable()
                .frame(width: 24, height: 24)
                .aspectRatio(contentMode: .fit)
                .foregroundColor(.grayText)
            
        }
        .padding(.horizontal, 24)
        .frame(width: 130, height: 54, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
        .background(Color.darkForeground)
        .cornerRadius(21.0)
        
    }
}
